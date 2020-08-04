import https from "@/util/https";
export async function menuSelectList():Promise<void>{
	return await https.get(`/menuServer/select`)
};
