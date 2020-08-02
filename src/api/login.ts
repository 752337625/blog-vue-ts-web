import https from "@/util/https";
import {userInfo} from "@/types/index";
export async function loginMethod(userInfo:userInfo,rememberMe:boolean):Promise<void>{
	return await https.post(`/loginServer?rememberMe=${rememberMe}`,userInfo)
};
export async function loginOutMethod():Promise<void>{
	return await https.get(`/logoutServer`)
}