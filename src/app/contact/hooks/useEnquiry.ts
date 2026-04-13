import { useMutation } from '@tanstack/react-query';
import { sendEnquiry, EnquiryDto } from '@/src/api/authApi';
export const useSendEnquiry = () => {
  return useMutation({
    mutationFn: (data: EnquiryDto) => sendEnquiry(data),
  });
};