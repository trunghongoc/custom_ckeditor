CKEDITOR.plugins.add( 'btn', {
    icons: 'btn',
    init: function( editor ) {
    	CKEDITOR.dialog.add( 'btnDialog', this.path + 'dialogs/btn.js' );

    	if ( editor.contextMenu ) {
            editor.addMenuGroup( 'btnGroup' );
            editor.addMenuItem( 'btnItem', {
                label: 'chỉnh sửa Nút nè',
                icon: this.path + 'icons/btn.png',
                command: 'btn',
                group: 'btnGroup'
            });

            editor.contextMenu.addListener( function( element ) {
                if ( element.getAscendant( 'button', true ) ) {
                    return { btnItem: CKEDITOR.TRISTATE_OFF };
                }
            });
        }
        
        editor.addCommand( 'btn', new CKEDITOR.dialogCommand( 'btnDialog') );
        editor.ui.addButton( 'btn', {
            label: 'Insert nút nè',
            command: 'btn',
            toolbar: 'insert'
        });

    }
});