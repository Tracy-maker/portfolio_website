"use server";


re_54tJhzbt_2xtkRMRSp7umJSb4A1C7qS2R
export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));
};
