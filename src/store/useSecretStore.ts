import { SecretService } from '@/services/SercretServiceWrapper';
import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import { useOrganizationStore } from './useOrganizationStore';
import { useAuthStore } from './useAuthStore';
import { useStorage } from '@vueuse/core';

export const useSecretStore = defineStore('SecretStore', () => {
  // Use ref for Secrets array to maintain reactivity
  const Secrets: Ref<any> = ref([]);
  const orgStore = useOrganizationStore();
  const authStore = useAuthStore();

  let secretStorage:any = useStorage('secrets', [], localStorage);
  // Methods to manage Secrets
  const getSecrets = async () => {
    try {
	  const organizationId = orgStore.currentOrganization.id;
	  const userId = authStore.getUserData.value.id;
      const res = await SecretService.fetchSecrets(organizationId,userId);
      Secrets.value = res.data;
      secretStorage.value = res.data;
    } catch (error) {
      console.error('Error fetching secrets:', error);
      throw error;
    }
  };

  const createSecret = async (payload: any) => {
    try {
      const res = await SecretService.createSecret(payload);
      console.log('Secret created successfully:', res);
      secretStorage.value.push(res);
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

  const searchSecrets = async (searchTerm: string) => {
    if(!searchTerm) {
      Secrets.value = secretStorage.value;
      return;
    }
    Secrets.value = secretStorage.value.filter((secret: any) => {
      return secret.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return { createSecret, getSecrets, deleteSecret, Secrets, searchSecrets };
});
