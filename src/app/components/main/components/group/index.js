'use strict';

import React from 'react';
import './style.scss';
import DirectoryField from './components/fields/directory';
import TextField from './components/fields/text';
import MessageField from './components/fields/message';
import DropdownField from './components/fields/dropdown';

const fieldMap = {
    'directory': DirectoryField,
    'text': TextField,
    'message': MessageField,
    'dropdown': DropdownField,
};

class Group extends React.Component {

    state = {};

    render() {

        let label;
        if (this.label) {
            label = (
                <div className="group-label">{ this.label }</div>
            );
        }

        let fields = this.fields.map((field, idx) => {
            let Field = fieldMap[field.type];
            if (!Field) {
                return;
            }
            return <Field field={ field } key={ idx } value={ this.preferences[field.key] } onChange={ this.onFieldChange.bind(this, field.key) } />
        })
            .filter((field) => {
                return field;
            });

        return (
            <div className="group">
                { label }
                { fields }
            </div>
        );

    }

    get label() {

        return this.group.label;

    }

    get fields() {

        return this.group.fields;

    }

    get group() {

        return this.props.group;

    }

    get preferences() {

        return this.props.preferences;

    }

    get onFieldChange() {

        return this.props.onFieldChange;

    }

}

module.exports = Group;
