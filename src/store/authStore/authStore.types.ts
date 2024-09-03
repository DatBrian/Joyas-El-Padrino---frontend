export type State = {
    name: string;
    token: string;
}

export type Actions = {
    setToken: (token: string) => void
    setProfile: (name: string) => void
}