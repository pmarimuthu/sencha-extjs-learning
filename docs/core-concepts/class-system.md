# Class System

## Defining Classes

```javascript
Ext.define('MyApp.view.Main', {
    extend: 'Ext.panel.Panel',
    
    config: {
        title: 'My Panel'
    },
    
    initComponent: function() {
        this.callParent(arguments);
    }
});
```

## Inheritance

```javascript
Ext.define('MyApp.view.CustomPanel', {
    extend: 'MyApp.view.Main',
    
    alias: 'widget.custompanel',
    
    initComponent: function() {
        this.title = 'Custom Panel';
        this.callParent(arguments);
    }
});
```

## Mixins

```javascript
Ext.define('MyApp.mixin.Sortable', {
    sort: function() {
        // sorting logic
    }
});

Ext.define('MyApp.view.Grid', {
    extend: 'Ext.grid.Panel',
    mixins: ['MyApp.mixin.Sortable']
});
```

## Singleton Pattern

```javascript
Ext.define('MyApp.util.Constants', {
    singleton: true,
    
    API_URL: 'https://api.example.com',
    TIMEOUT: 30000
});
```

## Statics

```javascript
Ext.define('MyApp.util.Helper', {
    statics: {
        formatDate: function(date) {
            return Ext.Date.format(date, 'Y-m-d');
        }
    }
});

// Usage
MyApp.util.Helper.formatDate(new Date());
```

## Key Concepts

- **extend**: Inherits from parent class
- **config**: Auto-generates getters/setters
- **alias**: Widget type for xtype
- **mixins**: Share functionality across classes
- **singleton**: Single instance pattern
- **statics**: Class-level methods

## Best Practices

1. Use meaningful class names
2. Follow namespace conventions
3. Keep classes focused and single-purpose
4. Document configs and methods
5. Use proper inheritance hierarchy

## Next Steps

- [Component Lifecycle →](/core-concepts/lifecycle)