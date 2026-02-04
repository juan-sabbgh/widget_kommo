define(['jquery'], function($) {
  var CustomWidget = function() {
    var self = this;
    
    // Configuración del widget
    this.callbacks = {
      // Renderizar el widget
      render: function() {
        console.log('Widget renderizado');
        return true;
      },
      
      // Inicialización
      init: function() {
        console.log('Widget inicializado');
        return true;
      },
      
      // Bind de acciones
      bind_actions: function() {
        console.log('Acciones vinculadas');
        return true;
      },
      
      // Configuración
      settings: function() {
        console.log('Configuración del widget');
        return true;
      },
      
      // Instalación
      onSave: function() {
        console.log('Widget guardado');
        return true;
      },
      
      // Destrucción
      destroy: function() {
        console.log('Widget destruido');
      },
      
      // Eventos de contactos
      contacts: {
        selected: function() {
          console.log('Contacto seleccionado');
        }
      },
      
      // Eventos de leads
      leads: {
        selected: function() {
          var lead_id = self.system().card_model.id;
          console.log('Lead seleccionado:', lead_id);
          
          // Obtener datos del lead
          self.crm_post(
            'ajax/leads/detail/',
            { id: lead_id },
            function(response) {
              console.log('Datos del lead:', response);
            }
          );
        }
      }
    };
    
    return this;
  };
  
  return CustomWidget;
});