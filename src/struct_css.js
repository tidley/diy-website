let scss = {};

// Body
scss.body = {};
scss.body['font-family:'] = '$font-family';
scss.body['min-width:'] = '350px';

// Header
scss['#header'] = {};
scss['#header']['overflow'] = 'hidden';
scss['#header']['background-color'] = '$header-fill';
scss['#header']['padding'] = '90px 10px';
scss['#header']['transition'] = '$transition-duration';
scss['#header']['position'] = 'fixed';
scss['#header']['width'] = '100%';
scss['#header']['top'] = '0';
scss['#header']['z-index'] = '99';

// Header a
scss['#header a'] = {};
scss['#header a']['float'] = 'left';
scss['#header a']['color'] = '$header-items';
scss['#header a']['text-align'] = 'center';
scss['#header a']['padding'] = '12px';
scss['#header a']['text-decoration'] = 'none';
scss['#header a']['font-size'] = '18px';
scss['#header a']['line-height'] = '25px';
scss['#header a']['border-radius'] = '4px';

// Body

// Footer
console.log(scss.body);
