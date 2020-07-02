/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/*CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};*/


CKEDITOR.editorConfig = function (config) {
    //config.toolbarGroups = [
    //	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    //	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    //	{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
    //	{ name: 'forms', groups: [ 'forms' ] },

    //	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    //	{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
    //	{ name: 'links', groups: [ 'links' ] },
    //	{ name: 'insert', groups: [ 'insert' ] },

    //	{ name: 'styles', groups: [ 'styles' ] },
    //	{ name: 'colors', groups: [ 'colors' ] },
    //	{ name: 'tools', groups: [ 'tools' ] },
    //	{ name: 'others', groups: [ 'others' ] },
    //	{ name: 'about', groups: [ 'about' ] }
    //];

    //config.removeButtons = 'Source,Save,Templates,Cut,Undo,Find,SelectAll,Scayt,Form,Radio,TextField,Checkbox,Textarea,Select,Button,ImageButton,HiddenField,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Link,Unlink,Anchor,Image,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,About,NewPage,Preview,Print,Copy,Paste,PasteText,PasteFromWord,Redo,Replace';


    config.toolbar = [
       { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
       { name: 'colors', items: ['TextColor', 'BGColor'] },
       { name: 'basicstyles', items: ['CopyFormatting', 'RemoveFormat'] },
       { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
       { name: 'paragraph', items: ['BulletedList', 'NumberedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Outdent', 'Indent'] },
       { name: 'insert', items: ['Table', 'HorizontalRule'] },
       { name: 'links', items: ['Link'] }
    ];

    config.language='es';
    config.title = "";
};