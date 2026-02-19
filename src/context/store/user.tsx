import { create } from "zustand";
import { UserStoreProps } from "./userTypes";
import { fetchService } from "@/services/fetchServices";

//Zustand User Store
const useUserStore = create<UserStoreProps>()(() => ({
  sendMailToAdmin: async (
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
  ): Promise<{
    success: boolean;
    message: string;
  }> => {
    try {
      const response = await fetchService({
        method: "POST",
        endpoint: "/api/user/sds/contact-us",
        data: data,
      });
      const result = response.data;
      console.log(response)
      if (response.code === 200) {
        return {  
          success: true,
          message: "Form Submited Successfully",
        };
      } else {
        return {
          success: false,
          message: result.message,
        };
      }
    } catch (error) {
      console.error("Error sending mail to admin:", error);
      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      };
    }
  },
}));

export default useUserStore;
