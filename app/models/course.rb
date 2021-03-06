class Course < ApplicationRecord
    validates :title,  presence: true
    validates :description, presence: true, length: { :minimum => 5} 

    belongs_to :user
    def to_s
        title
    end
    extend FriendlyId
    friendly_id :title, use: :slugged

    friendly_id :generated_slug, use: :slugged
   # # URLlink random number
    # def generated_slug
    #     require 'securerandom'
    #     @random_slug ||= persisted? ? friendly_id : SecureRandom.hex(4)
    # end
    # def to_s
    #     slug
    # end
end
