Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('Home', {
        path: '/',
        action() {
            this.redirect('constructors');
        }
    });

    this.route('constructors', {
        path: '/constructors',
        template: 'Constructors'
    });

    this.route('drivers');
    this.route('about');
});