import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incrementStep, uploadPhotos, resetForm } from '../../../Redux/FormDataSlice.js';
import { useCloudinaryUpload } from '../../../hooks/useCloudinaryUpload';
import StepsCounter from './StepsCounter';

export default function PostPhotos() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [propertyScore, setPropertyScore] = useState(66)
  const currentStep = 4;
  const [media, setMedia] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { uploadMultipleImages } = useCloudinaryUpload();

  const handleMediaChange = (e) => { 
    const files = Array.from(e.target.files);
    setMedia((prevMedia) => [...prevMedia, ...files]);
  };

  const handleRemoveMedia = (index) => {
    setMedia((prevMedia) => prevMedia.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (media.length === 0) {
      setErrors({ media: 'Please upload at least one photo or video' });
      return;
    }

    setUploading(true);
    setErrors({});

    try {
      const uploadedFiles = await uploadMultipleImages(media);
      const urls = uploadedFiles.map((file) => file.url);
      setUploadedUrls(urls);
      dispatch(uploadPhotos(urls));
      dispatch(incrementStep());
    } catch (error) {
      setErrors({ media: `Upload failed: ${error.message}` });
      console.error('Cloudinary upload error:', error);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleSkip = () => {
    dispatch(incrementStep());
  };

  const handleCancel = () => {
    dispatch(resetForm());
  };

  return (
    <div className="min-h-screen mt-24 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl bg-white rounded-lg shadow-sm p-6">
        <div className=" gap-8">
          <StepsCounter currentStep={currentStep} />
          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Add photos or videos of your property</h1>
              <p className="text-lg text-gray-600">A picture is worth a thousand words. 87% of buyers look at photos before buying.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="media" className="block text-sm font-medium text-gray-700">
                  Upload Photos or Videos
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    id="media"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleMediaChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="media"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    Choose Files
                  </label>
                </div>
                {errors.media && (
                  <p className="text-red-500 text-sm">{errors.media}</p>
                )}
              </div>

              {/* Media Preview */}
              <div className="grid grid-cols-2 gap-4">
                {media.map((file, index) => (
                  <div key={index} className="relative">
                    {file.type.startsWith('image/') ? (
                      <img src={URL.createObjectURL(file)} alt={`preview-${index}`} className="w-full h-32 object-cover rounded-lg" />
                    ) : (
                      <video controls className="w-full h-32 object-cover rounded-lg">
                        <source src={URL.createObjectURL(file)} type={file.type} />
                      </video>
                    )}
                    {!uploading && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMedia(index)}
                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition-colors"
                      >
                        &times;
                      </button>
                    )}
                    {uploading && (
                      <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                          <p className="text-xs">Uploading...</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Upload Progress */}
              {uploading && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 mb-2">Uploading {media.length} file(s) to Cloudinary...</p>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(uploadProgress / media.length) * 100}%` }}></div>
                  </div>
                </div>
              )}

              {/* Tips Section */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-4">Make your picture perfect!</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-800 rounded-full" />
                    Capture photos in landscape mode.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-800 rounded-full" />
                    Try clicking photos during the day. Avoid using flash.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-800 rounded-full" />
                    Tidy up for better impact.
                  </li>
                </ul>
              </div>

              {/* Property Score */}
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium text-gray-900">Property Score</p>
                  <p className="text-sm text-gray-500">Better your property score, greater your visibility</p>
                </div>
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="3"
                      strokeDasharray={`${propertyScore}, 100`}
                    />
                    <text x="18" y="20.35" className="text-xs" textAnchor="middle">
                      {propertyScore}%
                    </text>
                  </svg>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={uploading || media.length === 0}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Uploading...' : 'Continue'}
                </button>
                <button
                  type="button"
                  onClick={handleSkip}
                  disabled={uploading}
                  className="px-8 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue without photos
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={uploading}
                  className="px-8 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-right text-sm text-gray-600">
          <p>Need help?</p>
          <p>
            You can email us at{' '}
            <a href="mailto:bahadurdangi100@gmail.com " className="text-blue-600">
            bahadurdangi100@gmail.com 
            </a>
          </p>
          <p>
            or call us at{' '}
            <a href="tel:+919664265932" className="text-blue-600">
            +919664265932
            </a>{' '}
            (IND)
          </p>
        </div>
      </div>
    </div> 
  );
}

