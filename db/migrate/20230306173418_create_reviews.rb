class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :comment 
      t.integer :listing_id 
      t.integer :user_id 
      t.timestamps
    end
  end
end