<?php 

/*
 * Gerado em 14/05/2021 às 05:28:36
 * Por favor, não altere manualmente.
 */

return [
  'tables' => [
    'email_sents' => [
      'Name' => 'email_sents',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 6,
      'Avg_row_length' => 2730,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 7,
      'Create_time' => '2021-03-23 01:24:38',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'to' => [
          'Field' => 'to',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'subject' => [
          'Field' => 'subject',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'body' => [
          'Field' => 'body',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'emails' => [
      'Name' => 'emails',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 2,
      'Avg_row_length' => 8192,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 3,
      'Create_time' => '2021-03-23 01:24:38',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'subject' => [
          'Field' => 'subject',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'body' => [
          'Field' => 'body',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'params' => [
          'Field' => 'params',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'migrations' => [
      'Name' => 'migrations',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 0,
      'Avg_row_length' => 0,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 1,
      'Create_time' => '2021-03-23 01:24:38',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'migration' => [
          'Field' => 'migration',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'batch' => [
          'Field' => 'batch',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'password_resets' => [
      'Name' => 'password_resets',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 0,
      'Avg_row_length' => 0,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => NULL,
      'Create_time' => '2021-03-23 01:24:38',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'email' => [
          'Field' => 'email',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'token' => [
          'Field' => 'token',
          'Type' => 'varchar(255)',
          'Null' => 'NO',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'settings' => [
      'Name' => 'settings',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 5,
      'Avg_row_length' => 3276,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 6,
      'Create_time' => '2021-03-23 01:24:38',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'value' => [
          'Field' => 'value',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'value_default' => [
          'Field' => 'value_default',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'description' => [
          'Field' => 'description',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'help' => [
          'Field' => 'help',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'tevep_invites' => [
      'Name' => 'tevep_invites',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 2,
      'Avg_row_length' => 8192,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 32768,
      'Data_free' => 0,
      'Auto_increment' => 13,
      'Create_time' => '2021-05-05 00:53:06',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(11)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'tevep_id' => [
          'Field' => 'tevep_id',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
        ],
        'user_id' => [
          'Field' => 'user_id',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
        ],
        'user_email' => [
          'Field' => 'user_email',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'status' => [
          'Field' => 'status',
          'Type' => 'enum(\'accepted\',\'denied\')',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'datetime',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'teveps' => [
      'Name' => 'teveps',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 2,
      'Avg_row_length' => 8192,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 32768,
      'Data_free' => 0,
      'Auto_increment' => 3,
      'Create_time' => '2021-05-14 02:19:07',
      'Update_time' => '2021-05-14 02:24:18',
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(10)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'user_id' => [
          'Field' => 'user_id',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
        ],
        'parent' => [
          'Field' => 'parent',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => 'MUL',
          'Default' => NULL,
          'Extra' => '',
        ],
        'level' => [
          'Field' => 'level',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'title' => [
          'Field' => 'title',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'meta' => [
          'Field' => 'meta',
          'Type' => 'longtext',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'date_start' => [
          'Field' => 'date_start',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'date_final' => [
          'Field' => 'date_final',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'deleted_at' => [
          'Field' => 'deleted_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'user_notifications' => [
      'Name' => 'user_notifications',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 0,
      'Avg_row_length' => 0,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => 1,
      'Create_time' => '2021-05-11 23:18:12',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8mb4_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'bigint(20) unsigned',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => NULL,
          'Extra' => 'auto_increment',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'user_id' => [
          'Field' => 'user_id',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'title' => [
          'Field' => 'title',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'body' => [
          'Field' => 'body',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'image' => [
          'Field' => 'image',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'seen' => [
          'Field' => 'seen',
          'Type' => 'int(11)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'url' => [
          'Field' => 'url',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
    'users' => [
      'Name' => 'users',
      'Engine' => 'InnoDB',
      'Version' => 10,
      'Row_format' => 'Dynamic',
      'Rows' => 2,
      'Avg_row_length' => 8192,
      'Data_length' => 16384,
      'Max_data_length' => 0,
      'Index_length' => 0,
      'Data_free' => 0,
      'Auto_increment' => NULL,
      'Create_time' => '2021-03-23 01:24:38',
      'Update_time' => NULL,
      'Check_time' => NULL,
      'Collation' => 'utf8_unicode_ci',
      'Checksum' => NULL,
      'Create_options' => '',
      'Comment' => '',
      'Fields' => [
        'id' => [
          'Field' => 'id',
          'Type' => 'int(10)',
          'Null' => 'NO',
          'Key' => 'PRI',
          'Default' => '0',
          'Extra' => '',
        ],
        'name' => [
          'Field' => 'name',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'email' => [
          'Field' => 'email',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'email_verified_at' => [
          'Field' => 'email_verified_at',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'password' => [
          'Field' => 'password',
          'Type' => 'varchar(255)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'remember_token' => [
          'Field' => 'remember_token',
          'Type' => 'varchar(100)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'whatsapp' => [
          'Field' => 'whatsapp',
          'Type' => 'varchar(20)',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'meta' => [
          'Field' => 'meta',
          'Type' => 'text',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'level' => [
          'Field' => 'level',
          'Type' => 'enum(\'admin\')',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'created_at' => [
          'Field' => 'created_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
        'updated_at' => [
          'Field' => 'updated_at',
          'Type' => 'timestamp',
          'Null' => 'YES',
          'Key' => '',
          'Default' => NULL,
          'Extra' => '',
        ],
      ],
    ],
  ],
  'fks' => [
    'FK_tevep_invites_teveps' => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'tevep',
      'CONSTRAINT_NAME' => 'FK_tevep_invites_teveps',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'tevep',
      'TABLE_NAME' => 'tevep_invites',
      'COLUMN_NAME' => 'tevep_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'tevep',
      'REFERENCED_TABLE_NAME' => 'teveps',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    'FK_tevep_invites_users' => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'tevep',
      'CONSTRAINT_NAME' => 'FK_tevep_invites_users',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'tevep',
      'TABLE_NAME' => 'tevep_invites',
      'COLUMN_NAME' => 'user_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'tevep',
      'REFERENCED_TABLE_NAME' => 'users',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    'FK_teveps_teveps' => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'tevep',
      'CONSTRAINT_NAME' => 'FK_teveps_teveps',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'tevep',
      'TABLE_NAME' => 'teveps',
      'COLUMN_NAME' => 'parent',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'tevep',
      'REFERENCED_TABLE_NAME' => 'teveps',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
    'FK_teveps_users' => [
      'CONSTRAINT_CATALOG' => 'def',
      'CONSTRAINT_SCHEMA' => 'tevep',
      'CONSTRAINT_NAME' => 'FK_teveps_users',
      'TABLE_CATALOG' => 'def',
      'TABLE_SCHEMA' => 'tevep',
      'TABLE_NAME' => 'teveps',
      'COLUMN_NAME' => 'user_id',
      'ORDINAL_POSITION' => 1,
      'POSITION_IN_UNIQUE_CONSTRAINT' => 1,
      'REFERENCED_TABLE_SCHEMA' => 'tevep',
      'REFERENCED_TABLE_NAME' => 'users',
      'REFERENCED_COLUMN_NAME' => 'id',
    ],
  ],
];