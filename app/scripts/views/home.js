var HomeView = Backbone.View.extend({

	// template underscore = balise script dans le html
	_template: _.template(
		$('#home-tpl-un').html()
	),
	// template handlebars
	HBStemplate: Handlebars.compile(
		$('#home-tpl-hbs').html()
	),

	//el: '.home',

	events: {
		'click .button': 'buttonClick',
		'scroll .scroll-ctn': 'scollCtn' // do not work
	}

	initialize:function() {

		//console.log(this.el);
		//console.log(this.$el);
		//console.log(this.("ul"));

		this.$('.scroll-ctn').on(
			'scroll',$.proxy(this.scrollCtn, this)
		);

	}

})