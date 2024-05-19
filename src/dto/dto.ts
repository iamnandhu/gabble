import { User, UserCredential, UserInfo, UserMetadata } from "firebase/auth";


export interface firebaseConfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string,
}

export interface signUp {
    userName: string,
    email: string,
    password: string
}

export interface providerData extends UserInfo {
    uid: string;
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
}

export interface userMetaData extends UserMetadata {
    creationTime?: string;
    lastSignInTime?: string;
}

export interface user extends User {
    emailVerified: boolean;
    isAnonymous: boolean;
    metadata: userMetaData;
    providerData: providerData[];
    refreshToken: string;
    tenantId: string | null;
}

export interface userSignUpResponseModel extends UserCredential {
    user: User;
    providerId: string | null;
    operationType: "link" | "reauthenticate" | "signIn";
}
