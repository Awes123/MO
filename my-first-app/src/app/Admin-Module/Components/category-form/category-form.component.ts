import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryDTO } from '../../model/categoryDTO';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryForm!: FormGroup;
  id: number = 0;
  banner: string = '';
  thumbnail: string = '';
  categroy!: CategoryDTO;
  userSubmitted!: boolean;
  token: any;
  constructor(
    private fb: FormBuilder,
    private alertify: AlertifyService,
    private af: AngularFireStorage,
    private adminservice: AdminService) { }

  ngOnInit(): void {
    this.createcategoryForm();
    this.token = localStorage.getItem('token')
  }

  createcategoryForm() {
    this.categoryForm = this.fb.group({
      type: [null, Validators.required],
      name: [null, Validators.required],
      status: [null, [Validators.required]],
      submenu: [null, [Validators.required]],
    });
  }
  get type() {
    return this.categoryForm.get('type') as FormControl;
  }
  get name() {
    return this.categoryForm.get('name') as FormControl;
  }
  get status() {
    return this.categoryForm.get('status') as FormControl;
  }
  get submenu() {
    return this.categoryForm.get('submenu') as FormControl;
  }

  bannerUpload(files: any) {
    if (files.length === 0) return;
    let file = files[0];
    let path = '/category' + Math.random() + file.name;
    this.af.upload(path, file).then(() => {
      this.banner =
        'https://firebasestorage.googleapis.com/v0/b/minhajoptical-51791.appspot.com/o' +
        path +
        '?alt=media';

    });
  }
  thumbnailUpload(files: any) {
    if (files.length === 0) return;
    let file = files[0];
    let path = '/category' + Math.random() + file.name;
    this.af.upload(path, file).then(() => {
      this.thumbnail =
        'https://firebasestorage.googleapis.com/v0/b/minhajoptical-51791.appspot.com/o' +
        path +
        '?alt=media';

    });
  }
  onSubmit() {
    this.adminservice.AddCategory(this.token, this.categoryData())
      .subscribe((data) => {
        this.alertify.success("Congrats, Category added successfully");
        window.location.reload();
      })
  }

  categoryData(): CategoryDTO {
    return (this.categroy = {
      id: this.id,
      type: this.type.value,
      name: this.name.value,
      status: this.status.value,
      submenu: this.submenu.value,
      banner: this.banner,
      thumbnail: this.thumbnail
    });
  }

}
