import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

    comments: Array<{Comment: string}>;
    text : string;

    id:number;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.id = navParams.data;
        
    }

    ionViewDidLoad() {
        firebase.database().ref('timeline/'+this.id+'/Comments').on('value',snapshot => {
            this.comments = snapshot.val();
            
        })
    }

    

    addComment(){
        console.log(this.text);
        let len;
        if(!this.comments){
            len = 0;
            console.log('null');
            
        }
        else    
            len = this.comments.length;
        console.log(len);
        
        firebase.database().ref('timeline/'+this.id+'/Comments/'+len).set({
            Comment : this.text
        })  
        this.text = '';
        
    }

}
