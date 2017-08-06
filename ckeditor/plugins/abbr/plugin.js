CKEDITOR.plugins.add( 'abbr', {
    icons: 'abbr',
    init: function( editor ) {
        editor.dulieu = {theAbbr: "",tieudeAbbr:""}
        // console.log(editor)

        CKEDITOR.dialog.add( 'abbrDialog', this.path + 'dialogs/abbr.js' );
        // editor.on( 'doubleclick', function( evt )
        // {
        //     var element = evt.data.element;
            
            


        //     if ( element.is( 'abbr' ) )
        //     // //     evt.data.dialog = 'abbr';
        //     // // var definition = evt.data.definition;
        //     // // var content = definition.getContents( 'page1' );
        //     // // alert(element.$.innerHTML + "," + element.$.title)
        //     // hopthoai = evt.data.dialog = 'abbrDialog';
        //     // console.log(evt.data);
        //     {
        //         // evt.data.dialog = 'abbrDialog';
        //         // var plugin = CKEDITOR.plugins.abbrDialog;
        //         // dialogObj.setValueOf( 'tabId', 'elementId', 'Example' );
        //         // plugin.setValueOf( 'tab-basic', 'abbr', 'âu ze' );
        //         // console.log(plugin);
                
        //         // evt.data.dialog = 'abbrDialog';
        //         // 
        //         // var text = element.$.innerHTML;
        //         // var d = new CKEDITOR.dialogCommand('abbrDialog', {text: text})
        //         // console.log(editor.dialogs)
        //         // editor.getSelection().selectElement( element );
        //         // editor.setData(element)
        //         // evt.data.dialog = 'abbrDialog';
        //         // var s = CKEDITOR.dialog["abbr"]
        //         // console.log(s)
                
        //         var abbr = new CKEDITOR.dialog( myEditor, 'abbrDialog' );
        //         editor.dulieu.theAbbr = element.$.innerHTML
        //         editor.dulieu.tieudeAbbr = element.$.title
        //         abbr.show()
        //         // evt.data.dialog = 'abbrDialog';
        //     }
        // })

        if ( editor.contextMenu ) {
            editor.addMenuGroup( 'abbrGroup' );
            editor.addMenuItem( 'abbrItem', {
                label: 'chỉnh sửa Abbreviation',
                icon: this.path + 'icons/abbr.png',
                command: 'abbr',
                group: 'abbrGroup'
            });

            editor.contextMenu.addListener( function( element ) {
                if ( element.getAscendant( 'abbr', true ) ) {
                    return { abbrItem: CKEDITOR.TRISTATE_OFF };
                }
            });
        }
        
        editor.addCommand( 'abbr', new CKEDITOR.dialogCommand( 'abbrDialog') );
        editor.ui.addButton( 'Abbr', {
            label: 'Insert Abbreviation',
            command: 'abbr',
            toolbar: 'insert'
        });

        
        

    },
});

// evt.data.dialog = ( element.getAttribute( 'name' ) && ( !element.getAttribute( 'href' ) 
//     || !element.getChildCount() ) ) ? 'anchor' : 'link';
//                   editor.getSelection().selectElement( element );