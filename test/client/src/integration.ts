import { Integration } from 'vendor/Integration';

import { onSaveCallback } from '@callbacks/onSaveCallback';
import { settingsCallback } from '@callbacks/settingsCallback';
import { initCallback } from '@callbacks/initCallback';
import { destroyCallback } from '@callbacks/destroyCallback';
import { renderCallback } from '@callbacks/renderCallback';
import { bindActionsCallback } from '@callbacks/bindActionsCallback';
import { salesbotDesignerSettingsCallback } from '@callbacks/salesbotDesignerSettingsCallback';
import { onSalesbotDesignerSaveCallback } from '@callbacks/onSalesbotDesignerSaveCallback';
import { initMenuPageCallback } from '@callbacks/initMenuPageCallback';
import { onAddAsSourceCallback } from '@callbacks/onAddAsSourceCallback';
import { dpSettingsCallback } from '@callbacks/dpSettingsCallback';
import { linkCardCallback } from '@callbacks/linkCardCallback';
import { loadElementsCallback } from '@callbacks/loadElementsCallback';
import { loadPreloadedDataCallback } from '@callbacks/loadPreloadedDataCallback';
import { advancedSettingsCallback } from '@callbacks/advancedSettingsCallback';
import { contactsSelectedCallback } from '@callbacks/contactsSelectedCallback';
import { leadsSelectedCallback } from '@callbacks/leadsSelectedCallback';

import './integration.css';

const integration = new Integration();

/**
 * Important! The second param in addCallback should be a string exactly the
 * same as in Kommo documentation.
 *
 * For nested callbacks like `todo:selected`,
 * `contacts:selected` and `leads:selected` they should be written
 * with a dot separator.
 *
 * For example:
 * .addCallback(contactsSelectedCallback, 'contacts.selected');
 *
 * For more details about callbacks, see the Kommo documentation:
 * https://developers.kommo.com/docs/script-js
 */
integration
  .addCallback(onSaveCallback, 'onSave')
  .addCallback(settingsCallback, 'settings')
  .addCallback(initCallback, 'init')
  .addCallback(destroyCallback, 'destroy')
  .addCallback(renderCallback, 'render')
  .addCallback(bindActionsCallback, 'bind_actions')
  .addCallback(initCallback, 'initCallback')
  .addCallback(leadsSelectedCallback, 'leads.selected')
  .addCallback(contactsSelectedCallback, 'contacts.selected')
  .addCallback(advancedSettingsCallback, 'advancedSettings')
  .addCallback(loadPreloadedDataCallback, 'loadPreloadedData')
  .addCallback(loadElementsCallback, 'loadElements')
  .addCallback(linkCardCallback, 'linkCard')
  .addCallback(dpSettingsCallback, 'dpSettings')
  .addCallback(onAddAsSourceCallback, 'onAddAsSource')
  .addCallback(initMenuPageCallback, 'initMenuPage')
  .addCallback(onSalesbotDesignerSaveCallback, 'onSalesbotDesignerSave')
  .addCallback(salesbotDesignerSettingsCallback, 'salesbotDesignerSettings');

export default integration.build();
