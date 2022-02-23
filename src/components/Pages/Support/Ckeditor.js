import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Editor extends Component {
    render() {
        return (
            <div className="App p-5 m-auto">
                <form class='d-block m-auto'>
                    <div class="row mb-4">
                        <div class="col">
                        <label class='text-secondary'>Name</label>
                        <input type="text" class="form-control" placeholder="Name"/>
                        </div>
                        <div class="col">
                        <label class='text-secondary'>Email Address</label>
                        <input type="email" class="form-control" placeholder="emailaddress@gmail.com"/>
                        </div>
                    </div>
                    <br/>
                <h5 class='text-secondary d-block'>Message</h5>
                <br/>
                    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } } class='height-support-50' 
                />
                    <div class='d-flex justify-content-between mt-4'>
                        <input type='submit' value='submit' class='btn btn-primary mr-4'/>
                        <button class='btn btn-primary '>Cancel</button>
                    </div>
                </form>
                
                
            </div>
        );
    }
}

export default Editor;
