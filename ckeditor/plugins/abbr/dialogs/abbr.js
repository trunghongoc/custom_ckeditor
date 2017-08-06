CKEDITOR.dialog.add( 'abbrDialog', function( editor) {
    //giatri = "oOo"
    // console.log("<<"+gt+">>")

    return {
        title: '<strong>Abbreviation Properties</strong>'.replace(/\xA0/g, '&nbsp;'),
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Settings cơ bãn ))',
                elements: [
                    {
                        type: 'text',
                        id: 'abbr',
                        // default: editor.ahi.mot,
                        label: 'Abbreviation',
                        // validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty." )
                        setup: function( element ) {
                            this.setValue( element.getText() );
                        },

                        commit: function( element ) {
                            element.setText( this.getValue() );
                        }
                    },
                    {
                        type: 'text',
                        id: 'title',
                        label: 'Explanation',
                        // validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." )
                        setup: function( element ) {
                            this.setValue( element.getAttribute( "title" ) );
                        },

                        commit: function( element ) {
                            element.setAttribute( "title", this.getValue() );
                        }
                    }
                ]
            },
            {
                id: 'tab-adv',
                label: 'Settings nâng cmn cao ))',
                elements: [
                    {
                        type: 'text',
                        id: 'id',
                        label: 'Id'
                    }
                ]
            }
        ],
        onOk: function() {
            // var dialog = this;

            // var abbr = editor.document.createElement( 'abbr' );
            // abbr.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'title' ) );
            // abbr.setText( dialog.getValueOf( 'tab-basic', 'abbr' ) );

            // var id = dialog.getValueOf( 'tab-adv', 'id' );
            // if ( id )
            //     abbr.setAttribute( 'id', id );

            // editor.insertElement( abbr );

            var dialog = this;
            var abbr = this.element;
            this.commitContent( abbr );

            if ( this.insertMode )
                editor.insertElement( abbr );
        },
        onShow: function(){
            // this.setValueOf( "tab-basic", "abbr", editor.dulieu.theAbbr )
            // this.setValueOf( "tab-basic", "title", editor.dulieu.tieudeAbbr )
            // editor.dulieu = {theAbbr: "",tieudeAbbr:""}
            // console.log(this)


            var selection = editor.getSelection();
            var element = selection.getStartElement();

            if ( element )
                element = element.getAscendant( 'abbr', true );

            if ( !element || element.getName() != 'abbr' ) {
                element = editor.document.createElement( 'abbr' );
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