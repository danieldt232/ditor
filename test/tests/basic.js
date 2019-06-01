const ditor = require('../../../ditor');

it( "Exists", () => should(ditor).be.an.Object() );

it( "Contains as Injector funciton", () => should(ditor.Injector).be.a.Function() )
