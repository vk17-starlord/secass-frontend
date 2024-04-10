import { defineStore } from 'pinia';
import { Ref, computed,ref } from 'vue';
import { useAuthStore } from './useAuthStore';
import { OrganizationService } from '@/services/OrgServiceWrapper';
import { decodeBase64, encodeBase64, exportPrivateKeyAsBase64, exportPublicKeyAsBase64 } from '@/security/conversions';
export const useUserStore = defineStore('UserStore', () => {
  // Use ref for organizations array to maintain reactivity
  const organizations:Ref<any> = ref([]);

  const authStore = useAuthStore();
  // Methods to manage organizations

  const createInvite = async( payload: any) => {

  };
  return { createInvite }
});
