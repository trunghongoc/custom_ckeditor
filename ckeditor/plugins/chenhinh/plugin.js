CKEDITOR.plugins.add( 'chenhinh', {
    icons: 'chenhinh',
    init: function( editor ) {
        editor.addCommand( 'chenhinh', new CKEDITOR.dialogCommand( 'chenhinhDialog' ) );
        editor.ui.addButton( 'chenhinh', {
            label: 'Chèn hình',
            command: 'chenhinh',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'chenhinhDialog', this.path + 'dialogs/chenhinh.js' );
    }
});