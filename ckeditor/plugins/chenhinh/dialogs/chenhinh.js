CKEDITOR.dialog.add( 'chenhinhDialog', function( editor ) {
    return {
        title: 'Dialogs custom thêm 1 hình ảnh mới ))',
        minWidth: 1000,
        minHeight: 200,
        contents: [
            {
                id: 'tab-chenhinh',
                label: 'chèn hình',
                elements: [
                    {
                        type: 'textarea',
                        id: 'link_img',
                        label: 'Dán link hình bào bên dưới',
                        width: ['100%'],
                        'style': 'background:orange;width:100%;',
                        'cols' : '5',
                        'rows' : "20",
                        validate: CKEDITOR.dialog.validate.notEmpty( "Hông có được để trống link hình nha má ơi ))" )
                    },
                    {
                        type: 'text',
                        id: 'title_hinh',
                        label: 'Tiêu đề của hình nè',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Hông có được để trống tiêu đề nha má ơi ))" )
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;

            var img = editor.document.createElement( 'img' );
            img.setAttribute( 'src', dialog.getValueOf( 'tab-chenhinh', 'link_img' ) );
            img.setAttribute( 'title', dialog.getValueOf( 'tab-chenhinh', 'title_hinh' ) );
            
            editor.insertElement(img);
            console.log(img);
        }
    };
});