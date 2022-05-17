import "@/components/combobox/ComboBox";
import "@/components/icon/Icon";
import { comboBoxObjectOptions, comboBoxOptions } from "@/[sandbox]/sandbox.mock";
import { html } from "lit-element";
import { repeat } from "lit-html/directives/repeat";

const dropdownValue: string[] = [];
const testCustomValue = [
  { name: "blah", value: "123", __typename: "typename" },
  { name: "test", value: "456", __typename: "typename" }
];

const changeHandler = (e: CustomEvent) => {
  console.log("change-selected: ", e);
};

export const comboBoxTemplate = html`
  <h3>Default</h3>
  <md-combobox
    style="width: 220px; display: inline-block;"
    .options=${comboBoxOptions}
    placeholder="PlaceholderPlaceholderPlaceholderPlaceholderPlaceholder"
  ></md-combobox>
  <h3>Default with trim space</h3>
  <md-combobox
    .options=${comboBoxOptions}
    placeholder="Placeholder"
    .value=${[comboBoxOptions[5]]}
    search-trim-space
  ></md-combobox>
  <h3>Default with Custom Values</h3>
  <md-combobox
    .options=${comboBoxOptions}
    placeholder="Placeholder"
    .value=${[comboBoxOptions[5]]}
    allow-custom-value
  ></md-combobox>
  <h3>Invalid</h3>
  <md-combobox
    .options=${comboBoxOptions}
    placeholder="Placeholder"
    .value=${[comboBoxOptions[5]]}
    invalid
    invalid-text-i18n="This is error message"
  ></md-combobox>
  <h3>Multi Data with Custom Values</h3>
  <md-combobox
    .options=${comboBoxOptions}
    placeholder="Placeholder"
    .value=${[comboBoxOptions[1]]}
    allow-custom-value
    is-multi
  ></md-combobox>
  <h3>Disabled State</h3>
  <md-combobox disabled .options=${comboBoxOptions} placeholder="Placeholder" searchable> </md-combobox>
  <h3>Object Data</h3>
  <md-combobox placeholder="Placeholder" .options=${comboBoxObjectOptions} option-id="id" option-value="country">
  </md-combobox>
  <h3>Object Data Predefined Value</h3>
  <md-combobox
    placeholder="Placeholder"
    .options=${comboBoxObjectOptions}
    option-id="id"
    option-value="country"
    .value=${[comboBoxObjectOptions[5]]}
  >
  </md-combobox>
  <h3>Object Data Multi</h3>
  <md-combobox
    .options=${comboBoxObjectOptions}
    option-id="id"
    option-value="country"
    is-multi
    placeholder="Placeholder"
  >
  </md-combobox>
  <h3>Object Data Multi Predefined</h3>
  <md-combobox
    .options=${comboBoxObjectOptions}
    .value=${[comboBoxObjectOptions[7], comboBoxObjectOptions[8]]}
    option-id="id"
    option-value="country"
    is-multi
    placeholder="Placeholder"
  >
  </md-combobox>
  <h3>Slot Content</h3>
  <md-combobox with-custom-content>
    <div slot="one" aria-label="Facebook" display-value="Facebook">
      <span>Facebook</span>
      <md-icon name="icon-facebook_16"></md-icon>
    </div>
    <div slot="two" aria-label="Twitter" display-value="Twitter">
      <span class="company-value">Twitter</span>
      <md-icon name="icon-twitter_16"></md-icon>
    </div>
    <div slot="three" aria-label="Wikipedia" display-value="Wikipedia">
      <span class="company-value">Wikipedia</span>
      <md-icon name="icon-wikipedia_16"></md-icon>
    </div>
    <div slot="four" aria-label="Google" display-value="Google">
      <span class="company-value">Google</span>
      <md-icon name="icon-google_16"></md-icon>
    </div>
  </md-combobox>
  <h3>Slot Content Multi</h3>
  <md-combobox with-custom-content is-multi .value=${[{ id: "Wikipedia", value: "Wikipedia" }]}>
    <div slot="one" aria-label="Facebook" display-value="Facebook">
      <span>Facebook</span>
      <md-icon name="icon-facebook_16"></md-icon>
    </div>
    <div slot="two" aria-label="Twitter" display-value="Twitter">
      <span class="company-value">Twitter</span>
      <md-icon name="icon-twitter_16"></md-icon>
    </div>
    <div slot="three" aria-label="Wikipedia" display-value="Wikipedia">
      <span class="company-value">Wikipedia</span>
      <md-icon name="icon-wikipedia_16"></md-icon>
    </div>
    <div slot="four" aria-label="Google" display-value="Google">
      <span class="company-value">Google</span>
      <md-icon name="icon-google_16"></md-icon>
    </div>
  </md-combobox>
  <h3>Slot Complex Object Content Multi</h3>
  <md-combobox with-custom-content>
    ${repeat(
      testCustomValue,
      item => item.name,
      (item: { name: string; value: string }, index) => html`
        <div slot=${index} display-value=${item.name} aria-label="+${item.value}${item.name}">
          <span>${item.name}</span>
          <span>${item.value}</span>
        </div>
      `
    )}
  </md-combobox>
  <h3>Slot Complex Custom Object Content</h3>
  <md-combobox .custom-options=${JSON.stringify(dropdownValue)} with-custom-content>
    {dropdownValue.map((item, index) => dropdownOptionTemplate(item, index))}
  </md-combobox>
  <h3>Without Clear Icon</h3>
  <md-combobox .options=${comboBoxOptions} placeholder="Placeholder" no-clear-icon></md-combobox>

  <h3>With multi count and select all</h3>
  <md-combobox
    .options=${comboBoxOptions}
    shape=${"pill"}
    is-multi
    show-selected-count
    no-clear-icon
    allow-select-all
    placeholder="Select Queue"
    @change-selected=${changeHandler}
    select-all-i18n=${"All"}
  ></md-combobox>

  <h3>With multi count and select all for Object Data</h3>
  <md-combobox
    .options=${comboBoxObjectOptions}
    shape=${"pill"}
    option-id="id"
    is-multi
    option-value="country"
    show-selected-count
    allow-select-all
    placeholder="Select Queue"
    @change-selected=${changeHandler}
  >
  </md-combobox>

  <h3>Custom error</h3>
  <md-combobox
    .options=${comboBoxObjectOptions}
    option-id="id"
    option-value="country"
    placeholder="Select Queue"
    @change-selected=${changeHandler}
    show-custom-error
    shape=${"pill"}
  >
    <div
      slot="custom-error"
      aria-label="Wikipedia"
      display-value="Wikipedia"
      @click=${() => {
        console.log("clicked!");
      }}
    >
      <span class="company-value">Wikipedia</span>
      <md-icon name="icon-wikipedia_16"></md-icon>
    </div>
  </md-combobox>

  <h3>Group Label ComboBox</h3>
  <md-combobox style="width: 250px; display: inline-block;" 
              with-label
              with-custom-content
              placeholder="Placeholder">
    <span slot="countries-label" label="true" display-value="Countries" group-name="Countries">Countries</span>
    <div slot="Australia" aria-label="Australia" display-value="Australia" group-name="Countries">
      <span>Australia</span>
    </div>
    <div slot="Austria" aria-label="Austria" display-value="Austria" group-name="Countries">
      <span>Austria</span>
    </div>
    <span slot="cites-label" label="true" display-value="Cites" group-name="Cites">Cites</span>
    <div slot="Ambala" aria-label="Ambala" display-value="Ambala" group-name="Cites">
      <span>Ambala</span>
    </div>
    <div slot="Banaras" aria-label="Banaras" display-value="Banaras" group-name="Cites">
      <span>Banaras</span>
    </div>
  </md-combobox>
  <h3>Group Label ComboBox With Multi Tag</h3>
  <md-combobox style="width: 250; display: inline-block;" 
              with-label
              is-multi
              with-custom-content
              placeholder="Placeholder">
    <span slot="countries-label" label="true" display-value="Countries" group-name="Countries">Countries</span>
    <div slot="Australia" aria-label="Australia" display-value="Australia" group-name="Countries">
      <span>Australia</span>
    </div>
    <div slot="Austria" aria-label="Austria" display-value="Austria" group-name="Countries">
      <span>Austria</span>
    </div>
    <span slot="cites-label" label="true" display-value="Cites" group-name="Cites">Cites</span>
    <div slot="Ambala" aria-label="Ambala" display-value="Ambala" group-name="Cites">
      <span>Ambala</span>
    </div>
    <div slot="Banaras" aria-label="Banaras" display-value="Banaras" group-name="Cites">
      <span>Banaras</span>
    </div>
  </md-combobox>
  <h3>Group Label ComboBox With Multi Selected Count</h3>
  <md-combobox style="width: 250; display: inline-block;" 
              with-label
              is-multi
              show-selected-count
              allow-select-all
              with-custom-content
              placeholder="Placeholder">
    <span slot="countries-label" label="true" display-value="Countries" group-name="Countries">Countries</span>
    <div slot="Australia" aria-label="Australia" display-value="Australia" group-name="Countries">
      <span>Australia</span>
    </div>
    <div slot="Austria" aria-label="Austria" display-value="Austria" group-name="Countries">
      <span>Austria</span>
    </div>
    <span slot="cites-label" label="true" display-value="Cites" group-name="Cites">Cites</span>
    <div slot="Ambala" aria-label="Ambala" display-value="Ambala" group-name="Cites">
      <span>Ambala</span>
    </div>
    <div slot="Banaras" aria-label="Banaras" display-value="Banaras" group-name="Cites">
      <span>Banaras</span>
    </div>
  </md-combobox>
  <br/>
  <br/>
`;
