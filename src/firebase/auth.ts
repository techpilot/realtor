import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  User
} from 'firebase/auth';
import { auth } from './config';

interface ExtendedUser extends User {
  accessToken?: string;
}

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = getCurrentUser();
    return user;
  } catch (error) {
    console.log('Error signing in:', error);
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = getCurrentUser();
    return user;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = (): ExtendedUser | null => {
  return auth.currentUser;
};
