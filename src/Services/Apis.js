import { BASE_URL } from '../config/environment';

// BASE_URL already includes /api/v1/ (e.g. http://localhost:9002/api/v1/)
// So we only add the route-specific path here

export const AUTH_API = {
  SendOtp: `${BASE_URL}user/send-otp`,
  VerifyOtp: `${BASE_URL}user/verify-otp`,
};

export const PROPERTY_API = {
  CreateProperty: `${BASE_URL}property/properties`,
  GetPropertyById: `${BASE_URL}property/properties`,
  getPropertyList: `${BASE_URL}property/properties`,
  GetAllProperties: `${BASE_URL}property/properties`,
  updateProperty: `${BASE_URL}property/properties`,
  deleteProperty: `${BASE_URL}property/properties`,
  updateStatus: `${BASE_URL}property/properties`,
  getPropertiesByUser: `${BASE_URL}property/properties/getByUser`,
};

export const SOCIETY_API = {
  CreateSociety: `${BASE_URL}society/societies`,
  GetSocietyById: `${BASE_URL}society/societies`,
  UpdateSociety: `${BASE_URL}society/societies`,
  DeleteSociety: `${BASE_URL}society/societies`,
  GetAllSocieties: `${BASE_URL}society/societies`,
};

export const CONTACT_API = {
  sendContactEmail: `${BASE_URL}contact`,
};