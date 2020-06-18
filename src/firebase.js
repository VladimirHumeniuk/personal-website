import firebase from 'firebase/app';
import 'firebase/firestore';

import { environment } from '../environmet';

firebase.initializeApp(environment);

export const db = firebase.firestore();