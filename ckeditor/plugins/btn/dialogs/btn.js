CKEDITOR.dialog.add( 'btnDialog', function( editor) {
    //giatri = "oOo"
    // console.log("<<"+gt+">>")

    return {
        title: 'Chèn 1 nút nè ahihi',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-btn',
                label: 'Lựa chọn thông minh',
                elements: [
                    {
                        type: 'text',
                        id: 'classBtn',
                        // default: editor.ahi.mot,
                        label: 'Class:',
                        // validate: CKEDITOR.dialog.validate.notEmpty( "btneviation field cannot be empty." )
                        setup: function( element ) {
                            this.setValue( element.getAttribute( "class" ) );
                        },

                        commit: function( element ) {
                            element.setAttribute( "class", this.getValue() );
                        }
                    },
                    {
                        type: 'text',
                        id: 'contentBtn',
                        label: 'Nội dung:',
                        // validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." )
                        setup: function( element ) {
                            this.setValue( element.getText() );
                        },
                        commit: function( element ) {
                            element.setText( this.getValue() );
                        }
                    }
                ]
            }
        ],
        onOk: function() {
            // var dialog = this;

            // var btn = editor.document.createElement( 'button' );
            // btn.setAttribute( 'class', dialog.getValueOf( 'tab-btn', 'classBtn' ) );
            // btn.setText( dialog.getValueOf( 'tab-btn', 'contentBtn' ) );

            // editor.insertElement( btn );

            var dialog = this;
            var btn = this.element;
            this.commitContent( btn );

            if ( this.insertMode )
                editor.insertElement( btn );
        },
        onShow: function(){

            var selection = editor.getSelection();
            var element = selection.getStartElement();

            if ( element )
                element = element.getAscendant( 'button', true );

            if ( !element || element.getName() != 'button' ) {
                element = editor.document.createElement( 'button' );

                this.insertMode = true;
            }
            else
                this.insertMode = false;

            this.element = element;
            if ( !this.insertMode )
                this.setupContent( this.element );
        }
    };
    
});