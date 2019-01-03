class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :subject
      t.string :description
      t.boolean :is_completed

      t.timestamps
    end
  end
end
