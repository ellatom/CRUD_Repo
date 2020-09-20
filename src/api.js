import axios from 'axios';

const instance = 
    axios.create({ baseURL: 'https://5f63d2bf363f0000162d9181.mockapi.io'});

async function getAvatars() {
    return (await instance.get('/avatars')).data;
}

async function getAvatar(id) {
    return (await instance.get(`/avatars/${id}`)).data;
}

async function createAvatar(avatar) {
    await instance.post(`/avatars`, avatar);
}

async function updateAvatar(avatar) {
    await instance.put(`/avatars/${avatar.id}`, avatar);
}

async function deleteAvatar(id) {
    await instance.delete(`/avatars/${id}`);
}

export default {
    getAvatars,
    getAvatar,
    createAvatar,
    updateAvatar,
    deleteAvatar,
};
