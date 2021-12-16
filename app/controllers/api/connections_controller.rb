class Api::ConnectionsController < ApplicationController
  def index
    @connections = Connection.where(
      "user_id = ? OR connection_id = ? AND request_accepted = false", 
      params[:id],
      params[:id]
    )
    
    render 'api/connections/index'
  end

  def destroy
    @not_current_user_id = params[:id]
    @connections = Connection
      .where(
        "user_id = ? AND connection_id = ?",
        params[:id],
        current_user.id
      ).or(Connection
      .where(
        "user_id = ? AND connection_id = ?",
        current_user.id,
        params[:id]
      ))
    
    if @connections 
      @connections.each do |connection|
        if current_user.id == connection.connection_id || current_user.id == connection.user_id
          connection.destroy
        end
      end
      render 'api/connections/connection_delete'
    else
      render json: ["Connection could not be removed"]
    end
  end

  def create
    @connection = Connection.new(connection_params)
    @connection.user_id = current_user.id

    if @connection.user_id != @connection.connection_id && @connection.save
      corresponding_connection = Connection.find_by(user_id: @connection.connection_id)
      if corresponding_connection
        corresponding_connection.request_accepted = true
        @connection.request_accepted = true
        
        corresponding_connection.save!
        @connection.save!
      end

      render 'api/connections/show'
    else
      render json: @connection.errors.full_messages, status: 422
    end
  end

  private
  
  def connection_params
    params.require(:connection).permit(:user_id, :connection_id, :request_accepted)
  end
end
