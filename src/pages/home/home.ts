import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { ListPage } from '../list/list';
import { Post } from '../../Model/Post/Post';
import  firebase from 'firebase';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


    title : string;
    post : string;
    posts : Array<Post>;
    constructor(public navCtrl: NavController,
                public postsService : PostsProvider ) {

    }

    AddCart(){
        let postsRef = firebase.database().ref('timeline');
        postsRef.on('value',snapshot =>{
            this.posts = snapshot.val()
        });

        firebase.database().ref('timeline/'+this.posts.length).set({
            id : this.posts.length,
            logo : 'logo',
            text : this.post,
            title : this.title,
            Comments : []
        })  
        this.navCtrl.setRoot(ListPage);
    }
}
