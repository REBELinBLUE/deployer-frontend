export default (event) => {
  let title = 'Create';
  const button = $(event.relatedTarget);
  const dialog = $(event.target);

  $('.btn-danger', dialog).hide();
  $('.callout-danger', dialog).hide();
  $('.has-error', dialog).removeClass('has-error');
  $('.label-danger', dialog).remove();

  if (button.hasClass('btn-edit')) {
    title = 'Edit';
    $('.btn-danger', dialog).show();
  } else {
    // $('#variable_id').val('');
    // $('#variable_name').val('');
    // $('#variable_value').val('');

    // FIXME: Clear fields
  }

  dialog.find('.modal-title span').text(title);
};
