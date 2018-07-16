import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Post } from '../../Model/Post/Post';
import  firebase from 'firebase';

@Injectable()
export class PostsProvider {
    


    posts : Array<Post>;
    postsRef = firebase.database().ref('timeline');
    constructor(private fire: AngularFireDatabase) {
    }

    getPosts(){
        return this.posts;
    }
}
