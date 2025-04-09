/**
 * Generated by a build script. Do not modify.
 * Check orginal .jsx file.
 */
/* eslint-disable */

(function(wp2) {
  const { components, element, data, editPost, i18n, plugins } = wp2;
  const { useSelect, useDispatch } = data;
  const { registerPlugin } = plugins;
  const { PluginSidebar } = editPost;
  const {
    BaseControl,
    Button,
    CheckboxControl,
    PanelBody,
    PanelRow
  } = components;
  const { Fragment, useState, useEffect } = element;
  const { __ } = i18n;
  const Sidebar = () => {
    const dirtyEntityRecords = useSelect(
      (select) => select("core").__experimentalGetDirtyEntityRecords()
    ).filter((item) => item.name === "wp_block");
    const { createNotice } = useDispatch("core/notices");
    const { saveEditedEntityRecord } = useDispatch("core");
    const { setEntitiesToSave } = useDispatch("drupal");
    const [unselectedEntities, _setUnselectedEntities] = useState([]);
    const setUnselectedEntities = ({ kind, name, key, property }, checked) => {
      if (checked) {
        _setUnselectedEntities(
          unselectedEntities.filter(
            (elt) => elt.kind !== kind || elt.name !== name || elt.key !== key || elt.property !== property
          )
        );
      } else {
        _setUnselectedEntities([
          ...unselectedEntities,
          { kind, name, key, property }
        ]);
      }
    };
    function getEntitiesToSave() {
      return dirtyEntityRecords.filter(
        ({ kind, name, key, property }) => !unselectedEntities.some(
          (elt) => elt.kind === kind && elt.name === name && elt.key === key && elt.property === property
        )
      );
    }
    function saveItems() {
      const entitiesToSave = getEntitiesToSave();
      entitiesToSave.forEach(({ kind, name, key, property }) => {
        saveEditedEntityRecord(kind, name, key, property);
      });
      createNotice("success", __("Synced pattern saved!"), {
        type: "snackbar"
        // isDismissible: true,
      });
    }
    useEffect(() => {
      setEntitiesToSave(getEntitiesToSave());
    });
    return /* @__PURE__ */ React.createElement(Fragment, null, dirtyEntityRecords.length > 0 && /* @__PURE__ */ React.createElement(
      PluginSidebar,
      {
        name: "state",
        title: __("Synced Patterns"),
        icon: "block-default"
      },
      /* @__PURE__ */ React.createElement(PanelBody, null, /* @__PURE__ */ React.createElement(
        BaseControl,
        {
          help: __(
            "Saving synced patterns will affect other places where they are being used. You can de-select to not save."
          )
        },
        /* @__PURE__ */ React.createElement(BaseControl.VisualLabel, null, __(
          'The selected synced patterns will be saved when saving the content. Press "Save now" button to save immediately.'
        ))
      ), dirtyEntityRecords.map((item) => /* @__PURE__ */ React.createElement(PanelRow, null, /* @__PURE__ */ React.createElement(
        CheckboxControl,
        {
          key: item.key,
          label: item.title,
          checked: !unselectedEntities.some(
            (elt) => elt.kind === item.kind && elt.name === item.name && elt.key === item.key && elt.property === item.property
          ),
          onChange: (checked) => setUnselectedEntities(item, checked)
        }
      ))), /* @__PURE__ */ React.createElement(PanelRow, null, /* @__PURE__ */ React.createElement(Button, { isPrimary: true, onClick: () => saveItems() }, __("Save now"))))
    ));
  };
  registerPlugin("reusable-blocks-save", {
    render: () => /* @__PURE__ */ React.createElement(Sidebar, null)
  });
})(wp);
