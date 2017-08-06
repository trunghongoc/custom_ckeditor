CKEDITOR.plugins.add( 'thoigian', {
    icons: 'thoigian',
    init: function( editor ) {
        editor.addCommand( 'insertthoigian', {
            exec: function( editor ) {
                var now = new Date();
                editor.insertHtml( 'Thời gian hiện tại là: <em>' + now.toString() + '</em>' );
            }
        });
        editor.ui.addButton( 'thoigian', {
            label: 'Insert thoigian',
            command: 'insertthoigian',
            toolbar: 'insert'
        });
    }
});