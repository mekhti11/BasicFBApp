import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostsProvider }  from '../../providers/posts/posts' ;
import { CommentPage } from '../comment/comment';
import { Post } from '../../Model/Post/Post';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import  firebase from 'firebase';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
    posts : Array<Post>;
    tmp : Array<Post>;
    comments : Array<{Comment : string}>
    constructor(public navCtrl: NavController,
                public navParams: NavParams ,
                public postsService : PostsProvider ) {

    }

    addComment(p){     
        
        this.navCtrl.setRoot(CommentPage,p.id);
    }

    ionViewDidLoad(){
        const postsRef = firebase.database().ref('timeline');
        postsRef.on('value',snapshot =>{
            this.posts = snapshot.val();
            this.tmp = snapshot.val();
           
            this.posts.splice(0,this.posts.length);
            this.tmp.forEach(element => {
                this.posts.unshift(element);
            });        
            return false ;
        });
        this.postsService.posts = this.posts;
    }



}
