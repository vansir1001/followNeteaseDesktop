import axiosInstance, { AxiosResponseProps } from "@/utils/request";
export const getQrKey = () => {
    return axiosInstance.get("/login/qr/key", { params: { timeStamp: Date.now() } });
};
export const createLoginQr = (params?: any) => {
    return axiosInstance.get("/login/qr/create", { params: params || {} });
};
export const checkQrStatus = (params?: any) => {
    return axiosInstance.get("/login/qr/check", { params: params || {} });
};
export const loginByPassword = data => {
    return axiosInstance.post("/login/cellphone", { ...data, timeStamp: Date.now() });
};
export const getAccountInfo = () => {
    return axiosInstance.get("/user/account", { params: { timeStamp: Date.now() } });
};
export const getUserInfo = () => {
    return getAccountInfo().then(async (res: any) => {
        if (res.code === 200) {
            return await axiosInstance.get("/user/account", { params: { uid: res.account.id, timeStamp: Date.now() } });
        }
    });
};
export const getUserDetail = () => {
    return getAccountInfo().then(async (res: any) => {
        if (res.code === 200) {
            return await axiosInstance.get("/user/detail", { params: { uid: res.account.id, timeStamp: Date.now() } });
        }
    });
};
export const getLikeList = () => {
    return getAccountInfo().then(async (res: any) => {
        if (res.code === 200 && res.account && res.account.id) {
            return await axiosInstance.get("/likelist", { params: { uid: res.account.id, t: Date.now() } });
        } else {
            return {};
        }
    });
};
export const logout = () => {
    return axiosInstance.get("/logout", { params: { timeStamp: Date.now() } });
};
export const dailySignin = () => {
    return axiosInstance.get("/daily_signin", { params: { timeStamp: Date.now(), type: 1 } });
};
export const getUserPlayList = () => {
    return getAccountInfo().then(async (res: any) => {
        if (res.code === 200 && res.account && res.account.id) {
            return await axiosInstance.get("/user/playlist", { params: { uid: res.account.id, t: Date.now() } });
        } else {
            return { code: 200 };
        }
    });
};
export const getUserFollowsApi = (params: { limit: number; offset: number } = { limit: 10, offset: 0 }) => {
    return getAccountInfo().then(async (res: any) => {
        if (res.code === 200 && res.account && res.account.id) {
            return await axiosInstance.get("/user/follows", { params: { ...params, uid: res.account.id, timeStamp: Date.now() } });
        } else {
            return { code: 200 };
        }
    });
};
// ???????????????type????????????:
// 18 ????????????
// 19 ????????????
// 17???28 ??????????????????
// 22 ??????
// 39 ????????????
// 35???13 ????????????
// 24 ??????????????????
// 41???21 ????????????
export const getUserEventApi = (params: { limit: number; lasttime: number } = { limit: 10, lasttime: -1 }) => {
    return getAccountInfo().then(async (res: any) => {
        if (res.code === 200 && res.account && res.account.id) {
            return await axiosInstance.get("/user/event", {
                params: { ...params, uid: res.account.id, limit: params.limit, lasttime: params.lasttime, timeStamp: Date.now() },
            });
        } else {
            return { code: 200 };
        }
    });
};
