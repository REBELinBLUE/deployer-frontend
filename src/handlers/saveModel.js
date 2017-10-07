/*
  variable.save({
    name:        $('#variable_name').val(),
    value:       $('#variable_value').val(),
    target_type: $('input[name="target_type"]').val(),
    target_id:   parseInt($('input[name="target_id"]').val())
  }, {
    wait: true,
    success: function(model, response, options) {
      dialog.modal('hide');
      $('.callout-danger', dialog).hide();

      icon.removeClass('fa-refresh fa-spin').addClass('fa-save');
      $('button.close', dialog).show();
      dialog.find('input').removeAttr('disabled');

      if (!variable_id) {
        app.Variables.add(response);
      }
    },
    error: function(model, response, options) {
      $('.callout-danger', dialog).show();

      var errors = response.responseJSON;

      $('.has-error', dialog).removeClass('has-error');
      $('.label-danger', dialog).remove();

      $('form input', dialog).each(function (index, element) {
        element = $(element);

        var name = element.attr('name');

        if (typeof errors[name] !== 'undefined') {
          var parent = element.parents('div.form-group');
          parent.addClass('has-error');
          parent.append($('<span>').attr('class', 'label label-danger').text(errors[name]));
        }
      });

      icon.removeClass('fa-refresh fa-spin').addClass('fa-save');
      $('button.close', dialog).show();
      dialog.find('input').removeAttr('disabled');
    }
  });
*/

export default (Collection, element) => {
  const Model = Collection.model;

  return (event) => {
    // FIXME: duplicated in the deleteModel handle
    const target = $(event.currentTarget);
    const icon = target.find('i');
    const dialog = target.parents('.modal');

    icon.addClass('fa-refresh fa-spin').removeClass('fa-save');
    dialog.find('input').attr('disabled', 'disabled');
    $('button.close', dialog).hide();

    const id = $(`#${element}_id`).val();

    let instance;
    if (id) {
      instance = Collection.get(id);
    } else {
      instance = new Model();
    }

    console.log(instance);
  };
};
