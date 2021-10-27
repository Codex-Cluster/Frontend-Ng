import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { ImageUpload } from '../models/image-upload';

@Injectable({
  providedIn: 'root',
})
export class FirestorageService {
  constructor(private storage: AngularFireStorage) {}

  file: any;
  basePath: string[] = ['CategoryImages/', 'BookImages/'];
  setFile(file: any) {
    this.file = file;
  }

  image:any
  async uploadFile(type: number, filename: string) {
    const file = this.file;
    const filePath = this.basePath[type] + filename;
    const task = this.storage.upload(filePath, file);
    const ref = this.storage.ref(filePath);

    await task;
    console.log('Image uploaded!');
    this.image = await ref.getDownloadURL().toPromise();

    return this.image
  }
}
