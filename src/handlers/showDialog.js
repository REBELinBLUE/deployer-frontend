export default (event) => {
  let title = 'Create';
  const button = $(event.relatedTarget);
  const dialog = $(event.target);

  $('.btn-danger', dialog).hide();
  $('.callout-danger', dialog).hide();
  $('.existing-only', dialog).hide();
  $('.new-only', dialog).hide();
  $('.has-error', dialog).removeClass('has-error');
  $('.label-danger', dialog).remove();

  if (button.hasClass('btn-edit')) {
    title = 'Edit';
    $('.btn-danger', dialog).show();
    $('.existing-only', dialog).show();
  } else {
    // TODO: Test, not sure this is enough!
    const form = dialog.find('form')[0];
    form.reset();

    $('.new-only', dialog).show();
  }

  dialog.find('.modal-title span').text(title);
};
