import info from "./info";
const Todoist = {
  getToken: async (code) => {
    const formData = new FormData();
    formData.append("client_id", info.clientID);
    formData.append("client_secret", info.secret);
    formData.append("code", code);

    const response = await fetch("https://todoist.com/oauth/access_token", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw "Unable to procces request";
    const data = await response.json();
    return data;
  },
};
export default Todoist;
