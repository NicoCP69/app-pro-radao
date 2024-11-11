import api from './api';

export const buildersService = {
  create: (data) => api.post('/builders', data),
  getAll: () => api.get('/builders'),
  getById: (id) => api.get(`/builders/${id}`),
  update: (id, data) => api.put(`/builders/${id}`, data),
  delete: (id) => api.delete(`/builders/${id}`),
};
