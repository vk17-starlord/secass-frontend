import { SecretService } from '@/services/SercretServiceWrapper';
import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import { useOrganizationStore } from './useOrganizationStore';
import { useAuthStore } from './useAuthStore';

export const useSecretStore = defineStore('SecretStore', () => {
  // Use ref for Secrets array to maintain reactivity
  const Secrets: Ref<any> = ref([]);
  const orgStore = useOrganizationStore();
  const authStore = useAuthStore();
  // Methods to manage Secrets
  const getSecrets = async () => {
    try {
	  const organizationId = orgStore.currentOrganization.id;
	  const userId = authStore.getUserData.value.id;
      const res = await SecretService.fetchSecrets(organizationId,userId);
      Secrets.value = res.data;
      console.log(Secrets.value);
    } catch (error) {
      console.error('Error fetching secrets:', error);
      throw error;
    }
  };

  const createSecret = async (payload: any) => {
    try {
      const res = await SecretService.createSecret(payload);
      console.log('Secret created successfully:', res);
      return res;
    } catch (error) {
      console.error('Error creating secret:', error);
      throw error;
    }
  };

  const deleteSecret = async (id: any) => {
    try {
      const res = await SecretService.deleteSecret(id);
      console.log('Secret deleted successfully:', res);
      return true;
    } catch (error) {
      console.error('Error deleting secret:', error);
      throw error;
    }
  };

  return { createSecret, getSecrets, deleteSecret, Secrets };
});
