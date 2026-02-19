//Zustand User Types
export interface UserStoreProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
sendMailToAdmin:(data: any) => Promise<{
    success: boolean;
    message: string;
  }>;


}
