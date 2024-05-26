import { defineStore } from 'pinia';
import { Ref, computed,ref } from 'vue';
import { useAuthStore } from './useAuthStore';
import { decodeBase64, encodeBase64, exportPrivateKeyAsBase64, exportPublicKeyAsBase64 } from '@/security/conversions';
import { InviteService } from '@/services/InviteServiceWrapper';
import { useOrganizationStore } from './useOrganizationStore';
export const useUserStore = defineStore('UserStore', () => {
  // Use ref for Invites array to maintain reactivity
  const Invites:Ref<any> = ref([]);

  const authStore = useAuthStore();
  
  const orgStore = useOrganizationStore();
  // Methods to manage Invites
  const getInvites = async()=>{
    const currentUserEmail = authStore.getUserData.value.email;
    const res = await  InviteService.fetchInvites(currentUserEmail);
    // sort by createdAt recent first
    res.data.sort((a: { createdAt: string | number; }, b: { createdAt: string | number; }) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    Invites.value=res.data;
    console.log(Invites.value)
  }

  const createInvite = async( payload: any) => {
	try {
		const res = InviteService.createInvite(payload);
	} catch (error) {
    alert('error occurred')
    return;
	}
  };

  const acceptInvite = async(id: any)=>{
    const res =await InviteService.acceptInvite(id);
    if(res){
      alert('Accepted Invitation Successfully');
      return true;
    }else{
      return false;
    }
  }

  const deleteInvite = async(id: any)=>{
    const res =await InviteService.deleteInvite(id);
    if(res){
      alert('Deleted Invitation Successfully');
      return true;
    }else{
      return false;
    }
  }

  return { createInvite , getInvites , acceptInvite , deleteInvite, Invites }
});
