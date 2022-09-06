import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [{id: 1, username: "Sample Username"}],
    reducers: {
        addUser: (users, action) => {
            users.push(action.payload.user)
        },
        deleteUser: (users, action) => {
            const { userId: targetedId } = action.payload
            if(targetedId === undefined || targetedId === null) return

            return users.filter((user) => user.id !== targetedId)
        },
        updateUser: (users, action) => {
            const { newUsername, userId: targetedId } = action.payload
            if(newUsername === undefined || newUsername === null) return

            return users.map((user) => user.id === targetedId ? {...user, username: newUsername} : user)
        }
    }
})

const {actions, reducer} = usersSlice

export const {addUser, deleteUser, updateUser} = actions
export default reducer